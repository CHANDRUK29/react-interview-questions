import { Link, useLocation } from "react-router-dom";

const BreadCrums = () => {
    const { pathname } = useLocation()
    const pathNames = pathname.split('/').filter((x) => x)
    let breadCrumsPath = ''
    return (
        <div className="breadcrums">
            {pathNames.length>0 && <Link to={'/'}>Home</Link>}
            {
                pathNames.map((name, index) => {
                    breadCrumsPath += `/${name}`

                    const isLast = index === pathNames.length - 1
                    console.log("path",breadCrumsPath)
                    return isLast ? <span>/ {name}</span> :(
                        <span>/ <Link key={breadCrumsPath} to={breadCrumsPath}>{name}</Link></span>
                    )
                })
            }
        </div>
    )
}

export default BreadCrums;