import styles from './Store.module.css'
import { sanityclient } from '../../lib/client'



const sto = `*[_type=="store"]{
    title,
    header,
    slug,
    description,
    buttn,
    purchase,
    poster{asset->{_id,url}},
    thumbnail{asset->{url},  
  }}`

export default function Store({ Product }) {
    return (
        <div className={styles.allContainer}>

            <div style={{ marginTop: "10vw", display: "flex", flexDirection: "column" }}>

                <div key={Product[0].header} className={styles.info}>{Product[0].header}</div>

                <div className={styles.wrapper}>

                    {
                        Product && Product.map((info) => (

                            <div className={styles.innerwrapper}>

                                <div className={styles.wrap}>

                                    <img className={styles.img} src={info.thumbnail.asset.url} alt="" />

                                    <h2 className={styles.product}>{info.title}</h2>

                                    <div style={{ textAlign: "center" }}>
                                        <a href={info.purchase} style={{ textDecoration: "none" }} className={styles.btn}>{Product[0].buttn}</a>
                                    </div>

                                </div>


                            </div>

                        ))
                    }

                </div>

            </div>

        </div>

    )

}



export async function getStaticProps() {
    const Product = await sanityclient.fetch(sto)
    return {
        props: { Product }

    }
}






