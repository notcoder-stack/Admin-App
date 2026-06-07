import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const addProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a catergory</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          name="desc"
          id="desc"
          cols={30}
          rows={10}
          placeholder="description"
        ></textarea>
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
};

export default addProductPage;
