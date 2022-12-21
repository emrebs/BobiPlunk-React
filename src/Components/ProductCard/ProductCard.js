import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './productcard.module.scss';

const ProductCard = ({ product }) => {
      // title değişkenine product null değil ise title'in 0-20 karakter aralığını göster.
      const title = product?.title.slice(0, 20);
      const navigate = useNavigate();
      // Butona tıklanma olayında Toastify Göster
      const addProduct = () => {
            toast.warning(`${product?.title.slice(0, 20)} is added to card`, {
                  autoClose: 1000
            });
      }

      return (
            <div>
                  <Card className={styles.productCard}
                        style={{ width: "18rem", textAlign: "center" }}>
                        <Card.Img onClick={() => navigate(`./products/${product.id}`)}
                              variant="top"
                              src={product?.image}
                              className={styles.cardImg}
                        />
                        <Card.Body>
                              <Card.Title>
                                    {/* oluşturduğumuz title değişkenini göster.*/}
                                    {title}
                              </Card.Title>
                              {/* product null değil ise fiyat göster. */}
                              <Card.Text>$ {product?.price}</Card.Text>
                              {/* butona tıklandığında addProduct fonksiyonu ile Toastify Göster */}
                              <Button className={styles.commonBtn} onClick={addProduct}>ADD TO CARD</Button>
                        </Card.Body>

                  </Card>
            </div>
      )
}

export default ProductCard;
