

function useDebounce(cb,delay=2000) {
   let timer;

   return (...args)=>{

      clearTimeout(timer)

      timer=setTimeout(()=>{

          cb(...args)

      },delay)
   }
}

export default useDebounce;