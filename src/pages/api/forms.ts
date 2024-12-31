/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  data: any;
};

const tokenAdmin = "1234567890";
const tokenMarketing = "12345678";

const AsuransiMikroRumahku = {
    product: "Asuransi Mikro Rumahku",
    forms: [
      {
        section: "Informasi Tertanggung",
        forms: [
          {
            name: "Nama Tertanggung",
            type: "text",
            length: 100,
            mandatory: true
          },
          {
            name: "Nomor KTP",
            type: "number",
            length: 16,
            mandatory: true
          },
          {
            name: "Email",
            type: "email",
            length: 150,
            mandatory: false
          },
        ]
      },
      {
        section: "Informasi Ahli Waris",
        forms: [
          {
            name: "Nama",
            type: "text",
            length: 100,
            mandatory: true
          },
          {
            name: "Tanggal Lahir",
            type: "date",
            length: 0,
            mandatory: false
          },
          {
            name: "Nomor Telepon",
            type: "number",
            length: 16,
            mandatory: true
          },
          {
            name: "Hubungan",
            type: "dropdown",
            length: 0,
            mandatory: true
          },
        ]
      },
      {
        section: "Informasi Pertanggungan",
        forms: [
          {
            name: "Jangka Waktu Awal",
            type: "date",
            length: 0,
            mandatory: true
          },
          {
            name: "Jangka Waktu Akhir",
            type: "date",
            length: 0,
            mandatory: true
          },
          {
            name: "Informasi Kepemilikan",
            type: "radio",
            options: ["Ayah Kandung", "Anak Angkat"],
            length: 0,
            mandatory: true
          },
          {
            name: "Alamat",
            type: "textarea",
            length: 0,
            mandatory: true
          },
        ]
      },
      {
        section: "Informasi Santunan",
        forms: [
          {
            name: "Jenis Paket",
            type: "select",
            options: ["silver", "gold", "platinum"],
            length: 0,
            mandatory: true
          }
        ]
      },
    ],
  }

const AsuransiMikroBahari = {
    product: "Asuransi Mikro Bahari",
    forms: [
      {
        section: "Informasi Tertanggung",
        forms: [
          {
            name: "Nama Tertanggung",
            type: "text",
            length: 100,
            mandatory: true
          },
          {
            name: "Nomor KTP",
            type: "number",
            length: 16,
            mandatory: true
          },
          {
            name: "Email",
            type: "email",
            length: 150,
            mandatory: false
          },
        ]
      },
      {
        section: "Informasi Pertanggungan",
        forms: [
          {
            name: "Jangka Waktu Awal",
            type: "date",
            length: 0,
            mandatory: true
          },
          {
            name: "Jangka Waktu Akhir",
            type: "date",
            length: 0,
            mandatory: true
          },
          {
            name: "Nomor ID Kapal",
            type: "text",
            length: 30,
            mandatory: true
          },
          {
            name: "Jenis Kapal",
            type: "select",
            options: ["Kapal Motor", "Kapal Tempel"],
            length: 0,
            mandatory: true
          },
          {
            name: "Konstruksi Kapal",
            type: "select",
            options: ["Alumunium", "Fiber", "Metal"],
            length: 0,
            mandatory: true
          },
          {
            name: "Penggunaan Kapal",
            type: "select",
            options: ["Penangkapan Ikan", "Transportasi", "Wisata"],
            length: 0,
            mandatory: true
          },
          {
            name: "Harga Kapal",
            type: "number",
            length: 100,
            mandatory: true
          },
        ]
      },
      {
        section: "Informasi Santunan",
        forms: [
          {
            name: "Jenis Paket",
            type: "select",
            options: ["silver", "gold", "platinum"],
            length: 0,
            mandatory: true
          }
        ]
      },
    ],
  }


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const header = req.headers;
  const query = req.query;
  if (req.method === "GET") {
    switch (query.productId) {
      case "9001":
        res.status(200).json({ message: "success", data: AsuransiMikroRumahku });
        break;
      case "9002":
        res.status(200).json({ message: "success", data: AsuransiMikroBahari });
        break;
      default:
        res.status(200).json({message: "success", data: {}});
        break;
    }
  }
}