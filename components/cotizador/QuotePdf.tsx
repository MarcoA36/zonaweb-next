import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer"

import type { ServiceId, Step } from "./types"

interface QuotePDFProps {
  service: ServiceId
  steps: Step[]
  answers: Record<string, string>
  totalPrice: number
}

const styles = StyleSheet.create({

  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff"
  },

  header: {
    marginBottom: 30
  },

  brand: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 6
  },

  subtitle: {
    fontSize: 11,
    color: "#666"
  },

  priceBox: {
    marginTop: 20,
    marginBottom: 35,
    padding: 25,
    borderRadius: 8,
    border: "1px solid #e5e7eb",
    alignItems: "center"
  },

  priceLabel: {
    fontSize: 11,
    color: "#777",
    marginBottom: 5
  },

  price: {
    fontSize: 40,
    fontWeight: "bold"
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 12
  },

  table: {
    border: "1px solid #e5e7eb",
    borderRadius: 4
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottom: "1px solid #eee"
  },

  label: {
    color: "#555"
  },

  value: {
    fontWeight: "bold"
  },

  footer: {
    marginTop: 40,
    fontSize: 9,
    color: "#777",
    lineHeight: 1.4
  },

  contact: {
    marginTop: 20,
    fontSize: 10
  }

})

export function QuotePDF({
  service,
  steps,
  answers,
  totalPrice
}: QuotePDFProps) {

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.brand}>
            ZonaWeb
          </Text>

          <Text style={styles.title}>
            Presupuesto Web
          </Text>

          <Text style={styles.subtitle}>
            Estimación para {service}
          </Text>
        </View>


        {/* PRECIO */}
        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>
            INVERSIÓN ESTIMADA
          </Text>

          <Text style={styles.price}>
            ${totalPrice.toLocaleString("es-AR")}
          </Text>
        </View>


        {/* DETALLE */}
        <Text style={styles.sectionTitle}>
          Detalle del proyecto
        </Text>

        <View style={styles.table}>
          {steps.map((step) => {

            const option = step.options.find(
              (o) => o.value === answers[step.id]
            )

            return (
              <View key={step.id} style={styles.row}>

                <Text style={styles.label}>
                  {step.question.replace("¿", "").replace("?", "")}
                </Text>

                <Text style={styles.value}>
                  {option?.label ?? "-"}
                </Text>

              </View>
            )
          })}
        </View>


        {/* FOOTER */}
        <View style={styles.footer}>
          <Text>
            Este documento representa una estimación preliminar basada
            en la información proporcionada. El presupuesto final puede
            ajustarse según los requerimientos específicos del proyecto.
          </Text>

          <View style={styles.contact}>
            <Text>
              zonaweb.site
            </Text>
             <Text>
              Contacto: 2284656640
            </Text>
          </View>
        </View>

      </Page>
    </Document>
  )
}