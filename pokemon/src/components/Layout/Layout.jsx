import classes from "./Layout.module.css";

const Layout = (props) => {
    const background = {background: props.urlBg ? `url(${props.urlBg})` : props.colorBg}
  return (
      <section className={classes.root} style={background}>
          <div className={classes.wrapper}>
              <article>
                  <div className={classes.title}>
                      <h3>
                          {props.title}
                      </h3>
                      <span className={classes.separator}> </span>
                  </div>
                  <div className={`${classes.desc} ${classes.full}`}>
                      <p>
                          {props.descr}
                      </p>
                      <p>
                          {props.children}
                      </p>
                  </div>
              </article>
          </div>
      </section>
  )
}

export default Layout
