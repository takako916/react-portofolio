import React from "react";
import { useTranslation, Trans } from "react-i18next"; ;

const Footer = () => {
const { t } = useTranslation();
const email = t("email");

  return (
    <div className="footer my-3" id="contact">
      <h2 className="text-secondary">{t("contact")}</h2>
      <p className="text-black-50 fs-6">
        <Trans i18nKey="get_in_touch">
          I'm currently looking for full-time development opportunities! If you know of any positions available, please feel free to <a href={`mailto:${email}`} className="text-decoration-none text-primary">email me</a>.
        </Trans>
      </p>

    </div>
  );
};

export default Footer;
