
export function InputBox({label, placeholder, parentFun}) {
    return <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>     
      <input onChange={parentFun} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
}
// on a change the onChange in input calls the parent(Signup) function which is the (e)=>{...} 