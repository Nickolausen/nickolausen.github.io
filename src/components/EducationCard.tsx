import styles from './EducationCard.module.css'

function EducationCard()
{
    return (
        <>
            <article className="flex flex-row flex-wrap gap-5 justify-center content-center">
                <div className={styles.outer_target + " flex flex-wrap justify-center content-center mt-3"}>
                    <div className={styles.inner_target}></div>
                </div>
                <div className="flex flex-col">
                    <div className="text-3xl">2023 - 2026 <span className="text-sm text-gray-500">(expected)</span></div>
                    <div className="text-2xl">Degree in <span className='font-bold'>Computer Science and Engineering</span></div>
                    <div className="text-xl accent-clr">Alma Mater Studiorum, University of Bologna @ Cesena, IT</div>
                </div>
            </article>
        </>
    )
}

export default EducationCard