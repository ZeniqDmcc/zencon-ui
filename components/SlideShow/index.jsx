import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function SlideShow({ dataType, dataSource }) {
  let styleClassToUse;
  let lastSlideIndex;
  let slideToInsert;
  let ytVideosActivated = false;

  const slideShowRef = useRef(null);
  const nextButtonRef = useRef();
  const prevButtonRef = useRef();

  const players = useRef([]);

  const [slideshowImages, setSlideshowImages] = useState(null);
  const [slideshowVideos, setSlideshowVideos] = useState(null);
  // const [player, setPlayer] = useState(null);

  const waitForAnimationLock = 450;
  const styleClasses = {
    "5 or more": [
      "video-left-2",
      "video-left-1",
      "video-center",
      "video-right-1",
      "video-right-2",
    ],
    3: ["video-left-1", "video-center", "video-right-1"],
    "less than 3 or 4":
      "Number of slides cannot be less than 3 (makes no sense) or be 4 (asymmetric).",
  };

  // choose style classes
  if (dataSource.length >= 5) {
    styleClassToUse = styleClasses["5 or more"];
  } else if (dataSource.length === 3) {
    styleClassToUse = styleClasses["3"];
  } else {
    styleClassToUse = styleClasses["less than 3 or 4"];
    alert(styleClassToUse);
  }
  lastSlideIndex = styleClassToUse.length - 1;

  // load youtube iframe api
  useEffect(() => {
    // This code loads the IFrame Player API code asynchronously.
    let tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    // window.onYouTubeIframeAPIReady = ()=>{
    //     console.log("YouTubeIframeAPI is Ready");
    // }
  }, []);

  // decide what to render
  useEffect(() => {
    switch (dataType) {
      case "image":
        initImages();
        break;
      case "youtube":
        initYoutube();
        break;
      case "video":
        // console.log("call initVideos");
        initVideos();
        break;
      default:
        alert("no dataType prop for SlideShow component!!");
    }
  }, []);

  function createVideoElement() {
    // console.log("create non youtube videos not implemented yet")
  }

  function initImages() {
    if (slideShowRef.current.children.length < 3) {
      setSlideshowImages(
        dataSource.map((data, index) => {
          return (
            <div
              id={index}
              // style={{border: "solid purple 2px", height: "315px", width: "560px"}}
              className={`video ${
                index < 5 ? styleClassToUse[index] : "hidden"
              }`}
              key={index}
            >
              <div className="slideshow-image">
                <Image
                  src={data.src}
                  height={450}
                  width={800}
                  alt={"placeholder"}
                />
              </div>
            </div>
          );
        })
      );
    }
  }

  function initYoutube() {
    if (slideShowRef.current.children.length < 3) {
      setSlideshowVideos(
        dataSource.map((ytId, index) => {
          return (
            <div
              id={index}
              className={`video ${
                index < 5 ? styleClassToUse[index] : "hidden"
              }`}
              key={index}
            >
              <div
                id={`video-${ytId}`}
                className="vid-placeholder"
                onClick={(event) =>
                  activateYTVideos(event.currentTarget.id, ytId)
                }
              >
                <div className="youtube-iframe">
                  <Image
                    src={`https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`}
                    // src={`https://img.youtube.com/vi/NObabTJX6TI/maxresdefault.jpg`}
                    height={450}
                    width={800}
                    allowFullScreen={true}
                    frameBorder={0}
                    alt={"placeholder"}
                  />
                </div>
                <div className={"play-button"}>
                  <Image
                    src={"./assets/play_button1.png"}
                    height={80}
                    width={80}
                    alt={"placeholder"}
                  />
                </div>
              </div>
            </div>
          );
        })
      );
    }
  }

  function initVideos() {
    // console.log("call createVideoElement()");
    createVideoElement();
  }

  function activateYTVideos(divToReplace, ytId) {
    let player;
    if (divToReplace !== undefined) {
      document.getElementById(divToReplace).className = "youtube-iframe";

      player = new YT.Player(divToReplace, {
        height: "315",
        width: "560",
        videoId: ytId,
        events: {
          onReady: (event) => event.target.playVideo(),
        },
      });
      players.current.push(player);
    }
    // ytVideoPlayers.push(player);
    // ytVideoPlayers[ytId] = player;

    // setPlayer(player);
    // console.log(player);
    /*
        // get div where the youtube videos should be
        const youtube_slideshow = document.getElementById("youtube-slideshow");
        // go through each of them and replace the placeholder elements with an iframe with the YoutubeAPI
        for (let childDiv of youtube_slideshow.children) {
            let idOfDivToReplace = childDiv.children[0].id;
            // change classname of div to replace
            childDiv.children[0].className = "youtube-iframe";
            // This function creates an <iframe> (and YouTube player) after the API code downloads.
            let player;
            player = new YT.Player(idOfDivToReplace, {
                height: '315',
                width: '560',
                videoId: dataSource[childDiv.id],
                events: {
                    'onReady': (event) => childDiv.classList.contains("video-center") ? event.target.playVideo() : () => {
                    }
                }
            });
            ytVideoPlayers.push(player);
        }
        */

    // set activated to true because it should be activated only once
    ytVideosActivated = true;
  }

  function stopVideos() {
    players.current.forEach((player) => {
      player.pauseVideo();
    });
  }

  const prevSlide = () => {
    if (slideShowRef.current) {
      // stop all playing videos
      if (dataType === "youtube") {
        stopVideos();
        // document.getElementsByClassName("video-center")[0].children[0].stopVideo();
      }
      const children = slideShowRef.current.getElementsByClassName("video");
      if (children.length > 5) {
        // disable previous slide button so that the animation can finish
        prevButtonRef.current.style.pointerEvents = "none";
        // go through all children
        for (let i = 0; i < children.length; i++) {
          const currentChild = children[i];
          // check which styles are applied
          for (let j = styleClassToUse.length - 1; j >= 0; j--) {
            if (currentChild.classList.contains(styleClassToUse[j])) {
              // if currentChild is RIGHT most element, fade it to the right and then hide it
              if (j === 4) {
                currentChild.classList.remove(styleClassToUse[4]);
                currentChild.classList.add("fade-away-right");
                // temp variable because by the time setTimeout's callback runs, currentChild is different
                const timeoutChild = currentChild;
                // wait a little so that the animation can finish
                setTimeout(() => {
                  timeoutChild.classList.remove("fade-away-right");
                  timeoutChild.classList.add("hidden");
                  children[slideToInsert].classList.remove("fade-in-left");
                  prevButtonRef.current.style.pointerEvents = "all";
                }, waitForAnimationLock);
              } else {
                currentChild.classList.remove(styleClassToUse[j]);
                currentChild.classList.add(styleClassToUse[j + 1]);
              }
            }
          }
        }
        // determine the index of the next slide that has to be "inserted" (actually change class to be visible)
        if (lastSlideIndex - 4 <= 0) {
          let diff = lastSlideIndex - 4;
          slideToInsert = dataSource.length - 1 + diff;
          if (lastSlideIndex > 0) {
            lastSlideIndex--;
          } else {
            lastSlideIndex = dataSource.length - 1;
          }
        } else {
          slideToInsert = lastSlideIndex - 5;
          lastSlideIndex--;
        }
        // make the next slide visible
        children[slideToInsert].classList.add(styleClassToUse[0]);
        children[slideToInsert].classList.remove("hidden");
        children[slideToInsert].classList.add("fade-in-left");
      } else if (children.length === 5 || children.length === 3) {
        // if 5 or 3 slides
        prevButtonRef.current.style.pointerEvents = "none";
        setTimeout(() => {
          prevButtonRef.current.style.pointerEvents = "all";
        }, waitForAnimationLock);

        for (let i = 0; i < children.length; i++) {
          const currentChild = children[i];
          for (let j = styleClassToUse.length - 1; j >= 0; j--) {
            // check which styles are applied
            if (currentChild.classList.contains(styleClassToUse[j])) {
              currentChild.classList.remove(styleClassToUse[j]);
              if (j === styleClassToUse.length - 1) {
                currentChild.classList.add(styleClassToUse[0]);
                break;
              } else {
                currentChild.classList.add(styleClassToUse[j + 1]);
              }
            }
          }
        }
      } else {
        alert("4 and less than three images not allowed!");
      }
    }
  };

  const nextSlide = () => {
    if (slideShowRef.current) {
      // stop all playing videos
      if (dataType === "youtube") {
        stopVideos();
      }
      const children = slideShowRef.current.getElementsByClassName("video");
      if (children.length > 5) {
        // disable next slide button so that the animation can finish
        nextButtonRef.current.style.pointerEvents = "none";
        // go through all children
        for (let i = 0; i < children.length; i++) {
          const currentChild = children[i];
          // check which styles are applied
          for (let j = 0; j < styleClassToUse.length; j++) {
            if (currentChild.classList.contains(styleClassToUse[j])) {
              // if currentChild is LEFT most element, fade it to the left and then hide it
              if (j === 0) {
                currentChild.classList.remove(styleClassToUse[j]);
                currentChild.classList.add("fade-away-left");
                // temp variable because by the time setTimeout's callback runs, currentChild is different
                const timeoutChild = currentChild;
                // wait a little so that the animation can finish
                setTimeout(() => {
                  timeoutChild.classList.add("hidden");
                  timeoutChild.classList.remove("fade-away-left");
                  children[slideToInsert].classList.remove("fade-in-right");
                  nextButtonRef.current.style.pointerEvents = "all";
                }, waitForAnimationLock);
              } else {
                currentChild.classList.remove(styleClassToUse[j]);
                currentChild.classList.add(styleClassToUse[j - 1]);
              }
            }
          }
        }
        // determine the index of the next slide that has to be "inserted" (change class to be visible)
        if (lastSlideIndex === dataSource.length - 1) {
          lastSlideIndex = 0;
          slideToInsert = lastSlideIndex;
          // console.log("videoToInsert = " + slideToInsert);
        } else {
          lastSlideIndex++;
          slideToInsert = lastSlideIndex;
          // console.log("videoToInsert = " + slideToInsert);
        }
        // make the next slide visible
        children[slideToInsert].classList.add(styleClassToUse[4]);
        children[slideToInsert].classList.remove("hidden");
        children[slideToInsert].classList.add("fade-in-right");
      } else if (children.length === 5 || children.length === 3) {
        // if 5 or 3 slides
        nextButtonRef.current.style.pointerEvents = "none";
        setTimeout(() => {
          nextButtonRef.current.style.pointerEvents = "all";
        }, waitForAnimationLock);

        for (let i = 0; i < children.length; i++) {
          const currentChild = children[i];
          for (let j = 0; j < styleClassToUse.length; j++) {
            // check which styles are applied
            if (currentChild.classList.contains(styleClassToUse[j])) {
              currentChild.classList.remove(styleClassToUse[j]);
              if (j === 0) {
                currentChild.classList.add(
                  styleClassToUse[styleClassToUse.length - 1]
                );
                break;
              } else {
                currentChild.classList.add(styleClassToUse[j - 1]);
              }
            }
          }
        }
      } else {
        alert("4 and less than three images not allowed!");
      }
    }
  };

  return (
    <div className="slideshow bg-gradient" id="slideshow">
      <div className="container flex justify-center mx-auto bg-gradient bg__top">
        <div className="video-slideshow-container bg__bottom">
          <div
            ref={prevButtonRef}
            onClick={prevSlide}
            className={
              "button-prev " + (dataType === "image" ? "image-button" : "")
            }
          >
            <LeftOutlined
              className="left-arrow"
              style={dataType === "image" ? { color: "#9b9b9b" } : {}}
            />
          </div>
          <div
            ref={slideShowRef}
            id={
              dataType === "youtube" ? "youtube-slideshow" : "image-slideshow"
            }
            className="video-slideshow"
          >
            {slideshowImages}
            {slideshowVideos}
          </div>
          <div
            ref={nextButtonRef}
            onClick={nextSlide}
            className={
              "button-next " + (dataType === "image" ? "image-button" : "")
            }
          >
            <RightOutlined
              className="right-arrow"
              style={dataType === "image" ? { color: "#9b9b9b" } : {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
