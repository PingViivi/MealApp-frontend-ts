import React from 'react'

export interface IBanner {
    title: string,
    desc?: string,
    children?: any,
    style?: string,
}

const Banner = (props: IBanner) => {
  return (
    <section className={'Banner ' + props.style} style={BannerStyles}>
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
  marginTop: '50px',
  marginBottom: '50px',
}
const HeaderStyles = {
  marginBottom: '20px',
}

export default Banner