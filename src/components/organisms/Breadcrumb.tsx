import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type ParentPage = {
    name: string
    path: string
}

type BreadcrumbProps = {
    parents: ParentPage[]
    current: string
}

const BreadCrumb: React.FC<BreadcrumbProps> = ({parents, current}) => {
    const { t } = useTranslation()
    
    return (
        <div className="breadcrumbs">
            {
                parents.map((item, index) => (
                    <React.Fragment key={index}>
                        <Link to={item.path}>{t(item.name)}</Link>
                        <span className="connector">&gt;</span>
                    </React.Fragment>
                ))
            }
            <span className="current">{current}</span>
        </div>
    )
}

export default BreadCrumb;