import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";
import styles from "./onboarding.module.css";

async function Page() {
    const user = await currentUser();
    const userInfo = {};
    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user.username,
        name: userInfo?.name || user.firstName || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user.imageUrl,
    }
    return (
        <main className={styles.mainContainer}>
            <h1 className='head-text'>Onboarding</h1>
            <p className='mt-3 text-base-regular text-light-2'>
                Complete your profile now, to use Threds.
            </p>
            <section className={styles.accProfile}>
                <AccountProfile user={userData} btnTitle='Continue' />
            </section>
        </main>
    )
}

export default Page;