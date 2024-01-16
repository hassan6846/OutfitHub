//css
import styles from "./consent.module.css"
//icon
import { MdOutlineCookie } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
export const Consent = () => {
    return (
        <div className={styles.consentcontainer}>
            <p className={styles.consentMsg}><MdOutlineCookie size={22} />
                <span className={styles.consent_span}>This website uses cookies to ensure you get the best experience on our website </span>
                <span className={styles.consent_Link}>Learn More..</span>
            </p>
            {/* Button */}
            <div className={styles.consent_action}>
                <p className={styles.manageConsent}>Manage Cookies</p>
                <p className={styles.declineConsent}>Decline</p>
                <p className={styles.allowConsent}>Allow All</p>

                <MdOutlineClose fill="black" size={18} className={styles.consent_close} />
            </div>


        </div>
    )
}
