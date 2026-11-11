import { useCallback, useState } from "react";
import Section from "../components/Section";
import CertificateCard from "../components/CertificationCard";
import CertificateModal from "../components/CertificateModal";
import { useApp } from "../context/AppContext";

export default function Certifications() {
  const { t } = useApp();
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);
  const c = t.certificate;

  return (
    <Section id="certificates" eyebrow={c.eyebrow} title={c.title}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {c.items.map((item) => (
          <CertificateCard
            key={item.id}
            certificate={item}
            onSelect={setSelected}
          />
        ))}
      </div>

      {selected && (
        <CertificateModal
          certificate={selected}
          onClose={closeModal}
          verifyLabel={c.verify}
          credentialLabel={c.credentialLabel}
          copyLabel={c.copy}
          copiedLabel={c.copied}
        />
      )}
    </Section>
  );
}
