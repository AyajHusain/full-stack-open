const Notification = ({message}) =>{
    return(
        <div className= {(message.includes('deleted')||message.includes('failed'))
                 ?"update error":"update"}>
            {message}
        </div>
    )
}
export default Notification