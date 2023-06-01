import { ethers } from "ethers";

const parseBlock = (block) => {
    return {
        number: block?.number || 0,
        hash: block?.hash || 0,
        miner: block?.miner || 0,
        transactionsNumber: block?.transactions?.length || 0
    }
}

export default function handler(req, res) {
    const provider = new ethers.providers.JsonRpcProvider("https://smart1.zeniq.network:9545");
    const return_array = []
    return new Promise((resolve, reject) => {
        provider.getBlock("latest")
            .then(async block => {
                return_array.push(parseBlock(block))
                for(let i = 1; i < req.query.amount; i++) {
                    await provider.getBlock(block.number - i).then(r => return_array.push(parseBlock(r)))
                }
                req.query.amount > 1 && return_array.sort((a, b) => a.number > b.number ? 1 : -1)
                res.status(200).json(return_array)
                resolve()
            })
            .catch(() => {
                res.status(404).end();
                resolve()
            })
    })

}