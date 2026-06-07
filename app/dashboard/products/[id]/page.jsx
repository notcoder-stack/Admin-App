import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/avatar.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="Iphone" />
          <label htmlFor="price">Price</label>
          <input type="number" name="price" placeholder="$500" />
          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" placeholder="34" />
          <label htmlFor="color">Color</label>
          <input type="text" name="color" placeholder="White" />
          <label htmlFor="size">Size</label>
          <textarea type="text" name="size" placeholder="34" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value>Computer</option>
            <option value>Kitchen</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            rows={30}
            id="desc"
            placeholder="description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
