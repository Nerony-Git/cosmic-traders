import styles from './Product.module.css'
import { toCurrencyFormat } from '../utils/currency_format'

function Product({ productData, addToCart }) {

    return (
        <>
            <div className={styles.productImage}>
                <button className={`button ${styles.addToCart}`} onClick={() => addToCart(productData)}>
                    Add to Cart
                </button>
                <img src={require(`../images/${productData.image}`)} alt=''/>
            </div>
            <div className={styles.productDetails}>
                <div className={styles.title}>{productData.name}</div>
                <div className={styles.price}>{toCurrencyFormat(productData.price)}</div>
            </div>
        </>
    )
}

export default Product
