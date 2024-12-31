import { createConnection } from "mysql2/promise";
import { writeFile } from "fs/promises";
import { join } from "path";
import { parseCookies, setCookie } from "nookies";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse form data
    const formData = await req.formData();

    // Extract fields using formData.get
    const id = formData.get("id");
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const village = formData.get("village");
    const union_name = formData.get("union_name");
    const ward = formData.get("ward");
    const blood_group = formData.get("blood_group");
    const occupation = formData.get("occupation");

    let photo = null;

    // Handle the uploaded photo
    if (formData.get("photo")) {
      const photoFile = formData.get("photo");
      const newFilename = photoFile.name;
      const uploadDir = join(process.cwd(), "public/uploads");
      const newPath = join(uploadDir, newFilename);

      // Write the uploaded file to the public/uploads directory
      await writeFile(newPath, Buffer.from(await photoFile.arrayBuffer()));
      photo = `/uploads/${newFilename}`; // Path relative to the public folder
    }

    // Connect to the database
    const connection = await createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "amader_kachua",
    });

    if (photo === null) {
      const [rows] = await connection.execute(
        `SELECT photo_path FROM users WHERE id = ?`,
        [id]
      );

      // Assign the existing photo_path from the database if no new photo is uploaded
      photo = rows[0]?.photo_path;
    }

    // Update user in the database
    const query = `
      UPDATE users 
      SET 
        name = ?, email = ?, phone = ?, village = ?, union_name = ?, 
        ward = ?, blood_group = ?, occupation = ?, photo_path = ?
      WHERE id = ?
    `;

    const values = [
      name,
      email,
      phone,
      village,
      union_name,
      ward,
      blood_group,
      occupation,
      photo,
      id,
    ];

    await connection.execute(query, values);

    // Fetch the updated user info
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );

    const updatedUser = rows[0];

    // Set the updated user info as a cookie using nookies
    return NextResponse.json({
      message: "User updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Error updating user" }, { status: 500 });
  }
}
