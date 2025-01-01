export default function SingButton({text, bkgColor, borderColor, onclick_func}){

    return <button onClick={onclick_func} className="sing-btn w-full" style={{backgroundColor:bkgColor, boxShadow:"0px 5px "+borderColor}}>
        {text}
    </button>

}