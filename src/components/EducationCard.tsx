import styles from './EducationCard.module.css'
import { EducationTitle } from '../data/EducationTitle'

interface IProps {
    data?: EducationTitle 
}

function EducationCard({ data }: IProps)
{
    return (
        <>
            <article className="flex flex-row flex-wrap gap-5 justify-center content-center">
                <div className={styles.outer_target + " flex flex-wrap justify-center content-center mt-3"}>
                    <div className={styles.inner_target}></div>
                </div>
                <div className="flex flex-col">
                    <div className="text-3xl">{data?.start_year} - 2026 <span className="text-sm text-gray-500">(expected)</span></div>
                    <div className="text-2xl">{data?.title_description}</div>
                    <div className="text-xl accent-clr">Alma Mater Studiorum, University of Bologna @ Cesena, IT</div>
                </div>
            </article>
        </>
    )
}

export default EducationCard