import React from 'react'

export interface IBanner {
    title: string,
    desc?: string,
    children?: any,
}

const Banner = (props: IBanner) => {
  return (
    <section className='Banner' style={BannerStyles}>
        <h1 style={HeaderStyles}>
            {props.title}
        </h1>
        <p>
            {props.desc}
        </p>
        {props.children}
    </section>
  )
}

const BannerStyles = {
  
}
const HeaderStyles = {
  marginBottom: '20px',
}

export default Banner