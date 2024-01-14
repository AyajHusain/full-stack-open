const Notification = ({message}) =>{
    return(
        <div className= {message.includes('deleted')?"update error":"update"}>
            {message}
        </div>
    )
}
export default Notification