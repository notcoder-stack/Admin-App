import { updateUser } from "@/app/lib/actions";
import { fetchUserById } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { redirect } from "next/navigation";

const SingleUserPage = async ({params}) => {
  const {id} = params;
  const user = await fetchUserById(id);
  console.log(user);
  if (!user) {
    redirect("/dashboard/users");
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.userImage || "/avatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="new password" />
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label htmlFor="address">Address</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={user.isAdmin ? true : false}>Yes</option>
            <option value={!user.isAmin ? false : true}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={user.isActive ? true : false}>Yes</option>
            <option value={!user.isActive ? false : true}>No</option>
          </select>
          <input type="hidden" name="id" value={user.id}/>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
