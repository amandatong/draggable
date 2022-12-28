import { useRef, useEffect } from "react"

export default function Draggable({children}){
    const dragbox = useRef(null);
    const requestRef = useRef(null);

    useEffect(() => {

        dragbox.current.addEventListener('mousedown', function(e) {
            e.preventDefault();
            var initX = dragbox.current.offsetLeft;
            var initY = dragbox.current.offsetTop;
            var firstX = e.pageX;
            var firstY = e.pageY;

            this.addEventListener('mousemove', drag, false);
            window.addEventListener('mouseup', function() {
                dragbox.current.removeEventListener('mousemove', drag, false);
            })
            window.addEventListener('mouseleave', function() {
                dragbox.current.removeEventListener('mousemove', drag, false);
            })

            function drag(e){
                const limit_x = window.innerWidth - dragbox.current.offsetWidth;
                const limit_y = window.innerHeight - dragbox.current.offsetHeight;
                let final_x = initX + e.pageX - firstX;
                let final_y = initY + e.pageY - firstY;

                let coord_x = final_x < 0 ? '0px' : final_x > limit_x ? limit_x + 'px' : final_x + 'px';
                let coord_y =  final_y < 0 ? '0px' : final_y > limit_y ? limit_y + 'px' : final_y + 'px';
            
                dragbox.current.style.left = coord_x;
                dragbox.current.style.top = coord_y;
            
            }
            requestRef.current = requestAnimationFrame(dragbox);

            return () => {
                cancelAnimationFrame(requestRef.current)
            }
        }, false);
    }, []);
    return(
        <div ref={dragbox} className="draggable">
            {children}
        </div>
    )
}