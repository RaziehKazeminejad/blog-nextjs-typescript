import * as firebaseAdmin from "firebase-admin";

const privateKey = process.env["PRIVATE_KEY"];
const clientEmail = process.env["CLIENT_EMAIL"];
const projectId = process.env["PROJECT_ID"];

if (!privateKey || !clientEmail || !projectId) {
  console.log(
    `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
  );
}

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey:  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4J9Hn1Ycqa+Uk\no9SAUyhngms3FCDVU0FcBvcrgVvRv2Dq0MdeG0L51d4Gdt35nPJflUZhXniiRjDj\n2EEVqopBRpT0461BOzV4kOp9FzRNlaDzQICkpdE3O5yEFAJaQhQis4cMCfkDdBOb\nLuKnXhTEjcMJbI6VBGqXYXcDFY4UXapie2SxN/lnpuSncllcpbkrSfzTOza3rRm9\nniz/l2MW9iOv/7UT8zRZ+UYiMw92ljGqvAXPCAvSua4jn65dauv4NlBNYTUHNwdc\nmWXi92UK2PfAtPgE1bUe4WVb/WvA7oj7CEOR6d4MIieD/0gP+JSCWbviehmN3Sej\n65yCXnifAgMBAAECggEADv222a+JNEvaOHRZvSSH2n1EaxRpY9RGMs6iWllKdzWk\nFxlt0VxYxGvDijUs9r/u/xbwxsZg/ZzHKBUXn0LlxFCRmanbFb9TKABsBkjYSiSP\nGJ48mqqg8GUa5amXU2+jofuJV9KMAdr2KaDUdJl1CVcc9Gxw4vKcFrypaofbrA6c\nkWOL56d78nlqQUis1BQG/OtNcJaFBQ/0lMhIb1uR9/XmsBhIA+lQl3aOhgIr62+m\nw/keBfRcRhOn6cpMCEWQb+TbgxT1ZYbww42EEcrG6n+NP7g43KPEk9jK0Ot6biNw\nc8XsMRfOCQSM1WDXKki/ijQqB51tRuxOeL3gygrrwQKBgQDZuk7xYAtO3dhGE5rL\n6Co9BUdnsHqUIxbr+ybsoc8+qo7BXFhhKgotrRIMJT/iB8bDcYxcJ+F0/XGMo1vP\nlKetKdkgKalGQGvwg1N9tYsF4jmaVlMV2eDaPBC14afcab8NUpRFnHZO8SdCN29q\nxwsUfNQ7Y5xPfwpDNcl3Pwzq4QKBgQDYhsVEwxJ8SGLbrUcELobzP/S+41F4/1q+\nECj6OsCkFgl+iso1JWVUwfYmhuvjH3ayVQXqeiud3a65KQSuuVSzrPPLIk3pL91C\n+KRPwyTXD1wmaWZqBR0zMmeRBW26Qe8z6QXePW3XtxhdmdVeW8o9UyCgUfp9UCbA\nS5FA269TfwKBgGlvBvtr/w3Z7/k/VR6Y9ptGCyXzF+jUdS0hGeBNGwbFoQuRpFqo\n+PTVcn/fKehSy7WpLscRqOP2Nx5bnQIQgoIgWbxxcD9MwvhdH/koCIJ44lwSoXlb\nYL9NhuoMtDTQIGxbKOHsun3P2ar/HT0f1gW9zShVPERiyJ1zVnQgXCkBAoGBANPT\nNNXKSSFQ53WllN4gbmE2ZkcAt8m5dpqN0KjMJX3hGTS0rpFDnlhG0HpscARn2YUo\n7HqxPk5YewAlgrE0GgsU3gQR8Up5SuqjuItXi4jhO/NQFaMOkbxuSSd0uh4HNu3/\nv3/ldLoeIzYessB25+kKk9aDnJxPdzmUM+vRfzodAoGAV0AFThxx4rEc5O2a4BGR\nKpCLskTtjvXBVKn4p3enQ4ZTjj253dpR00vg4Dg3rUo7lLiC2aHaW7rEBK1+7LEo\nEWSzyMM6UIUD9iak2Ows0G+0CaFCSqkQ83yWNdNifhmO7R5Hs2lY3ocmFhfmHilE\ncdd4vdrbtCLUNTZh4PNLmRg=\n-----END PRIVATE KEY-----\n",
      clientEmail: "firebase-adminsdk-gggav@blog-nextjs-typescript.iam.gserviceaccount.com",
      projectId: "blog-nextjs-typescript",
    }),
    databaseURL: `https:/blog-nextjs-typescript.firebaseio.com`,
  });
}

export { firebaseAdmin };
