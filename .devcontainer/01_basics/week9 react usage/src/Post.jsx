let style = {
  width: 300, 
  backgroundColor: "white",
  borderRadius: 5,
  borderWidth: 10,
  borderColor: "black"
}
export default function PostComponent(props) {
  console.log(props.time);
  
  return (

    <div style={style}>
      <div style={{display: "flex"}}>
        <div>
          <img style={{height: 55.2, width: 55.2, borderRadius: 55.2}} src={props.src} />
        </div>
        <div style={{fontSize: 15, marginLeft: 10}}>
          <div>{props.name} <img src={"https://www.citypng.com/public/uploads/preview/hd-blue-badge-verified-tick-mark-png-21635270771bdfndurjfn.png"} style={{height: 12, width: 12, borderRadius: 10}}/></div>
          <div>{props.subtitle}</div>
          {props.time.trim() !== "" ? <div>{props.time} <img src={"https://clipart-library.com/2023/5bbef396ebe30.jpg"} style={{height: 5, width: 5}}/> <img src={"https://www.bing.com/th/id/OIP.LnymWFPUJMDASX9F-RRsXwHaHa?w=221&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} style={{height: 10, width: 10}}/></div> : null}
          
        </div>
      </div>
      {/* Post content */}
      <div style={{fontSize: 20}}>{props.content}</div>
    </div>
  )
}