import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";
import GitHubLogo from "../../public/0035c307a36c17babb8d25cd02fb6488.png";
import TextContainer from "./TextContainer";
import "../../public/styles.css";

import { stops } from "../utils";

function TrainsNow() {
  const [data, setData] = useState({ isFetching: false, trains: [] });
  const [counter, setCounter] = useState(30);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  const fetchTrains = async () => {
    try {
      setData({ isFetching: true, trains: data.trains });
      const response = await axios.get("/api/orange");
      setData({ isFetching: false, trains: response.data });
    } catch (e) {
      console.log(e);
      setData({ isFetching: false, trains: data.trains });
    }
  };

  useEffect(() => {
    // https://dev.to/zhiyueyi/how-to-create-a-simple-react-countdown-timer-4mc3
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      fetchTrains();
      setLastRefreshed(new Date());
      setCounter(30);
    }
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    fetchTrains();
  }, []);

  const addColors = (stops, trains) => {
    for (let t = 0; t < trains.length; t++) {
      for (let s = 0; s < stops.length; s++) {
        if (trains[t].stopName === stops[s].name) {
          stops[s].color = trains[t].color;
        }
      }
    }
    const activeStopNames = trains.map((elem) => elem.stopName);
    stops.map((elem) =>
      !activeStopNames.includes(elem.name)
        ? (elem.color = "#D6D6D6")
        : (elem.color = elem.color)
    );
    return stops;
  };

  const styledStops = addColors(stops, data.trains);

  let isMobile = false;
  // device detection to conditionally apply absolute positioning
  // https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    isMobile = true;
  }

  return (
    <div className="container">
      <TextContainer
        counter={counter}
        setCounter={setCounter}
        lastRefreshed={lastRefreshed}
        setLastRefreshed={setLastRefreshed}
        fetchTrains={fetchTrains}
        trains={data.trains}
      />
      <div>{<Map props={styledStops} />}</div>
      <a href="https://github.com/neckenth/oranges">
        <img
          src={GitHubLogo}
          className="logo"
          style={{
            height: isMobile ? "40px" : "20px",
            width: isMobile ? "40px" : "20px",
          }}
        />
      </a>
    </div>
  );
}

export default TrainsNow;
