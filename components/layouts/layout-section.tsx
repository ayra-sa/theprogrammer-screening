import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const LayoutSection = ({children}: Props) => {
  return (
    <section className='py-14 relative'>
        {children}
    </section>
  )
}

export default LayoutSection