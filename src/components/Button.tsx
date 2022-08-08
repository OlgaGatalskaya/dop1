type ButtonTypeProps = {
    nickName: string
    callBack: () => void
}


export const Button = (props:ButtonTypeProps) => {
    const onClickButtonHandler = () => {
      props.callBack()
    }
  return (
      <button onClick={onClickButtonHandler}>{props.nickName}</button>
  )
}
