import { useState } from "react";
import { useGlobalContext } from "../../../../../context/context";
import { useCanvasContext } from "../context";

const useMouseMove = ({refConvas, imgName}) => {
    const { disableCanvas, setDescriptionInputValue, setCanvasColor } = useCanvasContext();
    const { descriptionsCanvas } = useGlobalContext();

    const [XpositionMouse, setXpositionMouse] = useState()
    const [YpositionMouse, setYpositionMouse] = useState()

    const handleMouseMove = (event) => {
        setXpositionMouse(event.nativeEvent.offsetX);
        setYpositionMouse(event.nativeEvent.offsetY);
    };

    const onClick = () => {
        if(disableCanvas){
            let data = refConvas.current.getSaveData();
            let dataParse = JSON.parse(data)
            getDescriptionPointColor(dataParse.lines, XpositionMouse, YpositionMouse)}
    };

    const getDescriptionPointColor = (arr, x, y) => {
        console.log('arr',arr);
        arr.forEach((i,index) => {
            let isIf = false
            i.points.forEach(c => {
                let isX = Math.abs(x - Math.round(c.x)) < 15
                let isY = Math.abs(y - Math.round(c.y)) < 15
                if(isY === true && isX === true && !isIf){
                    isIf= true
                    let num = 0
                    let arrSelectedColors = []
                    arr.forEach((d, indexD) => {
                        if(d.brushColor === i.brushColor) {
                            num += 1
                            arrSelectedColors.push({num, index: indexD})
                        }
                    })
                    let findEl = arrSelectedColors.find(f => f.index === index)
                    console.log('descriptions',descriptionsCanvas);
                    console.log('imgName + i.brushColor + findEl.num',imgName + i.brushColor + findEl.num);
                    setDescriptionInputValue(descriptionsCanvas[imgName + i.brushColor + findEl.num])
                    setCanvasColor(i.brushColor)
                }else{
                    // setDescriptionInputValue(null)
                    // setCanvasColor(null)
                }

            })
        })
    }

    return { handleMouseMove, onClick };
};

export default useMouseMove;
