'use client'
 
export default function ModalWrapper({ children, show, className }: { children: React.ReactNode, show: boolean, className?: string }) {
  return (
    show ? <div className={`w-screen h-screen fixed left-0 top-0 flex justify-center items-center bg-[#20202080] ${className}`} style={{zIndex: 999}}>
      {children}
    </div> : ''
  )
}