import { writeFile } from "fs/promises";
import { join } from "path";
import { createConnection } from "mysql2/promise";
import bcrypt from "bcrypt"; // Import bcrypt for password hashing

export async function POST(req) {
  try {
    // Parse form data
    const data = await req.formData();

    // Extract fields and file from form data
    const file = data.get("photo");
    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    const phone = data.get("phone")?.toString();
    const village = data.get("village")?.toString();
    const union = data.get("union")?.toString();
    const ward = data.get("ward")?.toString();
    const blood_group = data.get("blood_group")?.toString();
    const occupation = data.get("occupation")?.toString();
    const password = data.get("password")?.toString();

    if (!file || !name || !email || !phone || !password) {
      return Response.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Hash the password using bcrypt
    const saltRounds = 10; // Number of salt rounds for hashing
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Handle file upload
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = join(process.cwd(), "public/uploads", file.name);

    // Save file to disk
    await writeFile(filePath, buffer);

    // Save the relative path for the database
    const photoPath = `/uploads/${file.name}`;

    // Connect to MySQL database
    const connection = await createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "amader_kachua",
    });

    // Check if the email already exists
    const [rows] = await connection.execute(
      `SELECT * FROM users WHERE email = ?`,
      [email]
    );

    if (rows.length > 0) {
      await connection.end();
      return Response.json(
        { message: "Email already exists." },
        { status: 400 }
      );
    }

    const [result] = await connection.execute(
      `INSERT INTO users (name, email, phone, village, union_name, ward, blood_group, occupation, password, photo_path)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        email,
        phone,
        village,
        union,
        ward,
        blood_group,
        occupation,
        hashedPassword, // Save the hashed password
        photoPath,
      ]
    );

    const uid = result.insertId; // Get the ID of the newly inserted user

    // Fetch the newly created user data
    const [newUserRows] = await connection.execute(
      `SELECT id, name, email, phone, village, union_name, ward, blood_group, occupation, photo_path, created_at
       FROM users WHERE id = ?`,
      [uid]
    );

    await connection.end();

    // Return success Response
    return Response.json(
      { message: "Signup successful!", user: newUserRows[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { message: "An error occurred during signup." },
      { status: 500 }
    );
  }
}
