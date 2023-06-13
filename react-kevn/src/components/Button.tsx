interface Props{
    children:string;
    color?: 'primary'|'secondary';
    onClick: ()=> void;
}
export default function Button({children, color,onClick}:Props){
    return <button color='primary' className={'btn btn-'+color} onClick={()=> console.log('clicked')}>
        {children}
    </button>
}