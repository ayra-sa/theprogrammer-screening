import {ReactNode} from 'react'

type Props = {
    children: ReactNode
}

const Container = ({children}: Props) => {
  return (
    <div className='container mx-auto px-5 md:px-0'>
        {children}
    </div>
  )
}

export default Container