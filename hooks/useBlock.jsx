import React, {useEffect, useRef, useState} from 'react'
import axios from "axios";
import { ethers } from "ethers";

const parseBlock = (block) => {
    return {
        number: block?.number || 0,
        hash: block?.hash || 0,
        miner: block?.miner || 0,
        transactionsNumber: block?.transactions?.length || 0
    }
}

function handler(amount) {
    const provider = new ethers.providers.JsonRpcProvider("https://smart1.zeniq.network:9545");
    const return_array = []
    return new Promise((resolve, reject) => {
        provider.getBlock("latest")
            .then(async block => {
                return_array.push(parseBlock(block))
                for(let i = 1; i < amount; i++) {
                    await provider.getBlock(block.number - i).then(r => return_array.push(parseBlock(r)))
                }
                amount > 1 && return_array.sort((a, b) => a.number > b.number ? 1 : -1)
                resolve(return_array)
            })
            .catch(() => {
                resolve([])
            })
    })
}

export const useBlock = (amount) => {
    const [blocks, setBlocks] = useState([])
    const [loading, setLoading] = useState(true)
    const past_blocks = useRef([])
    let initiated;

    useEffect(() => {
        let timeout_id
        const fetchBlocks = () => {
            return handler(initiated ? 1 : amount).then(function (response) {
                if (!initiated) {
                    past_blocks.current = response
                    initiated = true
                } else {
                    past_blocks.current.shift()
                    past_blocks.current.push(response[0])
                }
                const new_array = Array.from(past_blocks.current)
                setBlocks(new_array)
                setLoading(false)
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                timeout_id = setTimeout(fetchBlocks, 3500)
            })
        }
        fetchBlocks()
        return (() => {
            clearTimeout(timeout_id)
        })
    }, []);
    return {blocks, loading}
}