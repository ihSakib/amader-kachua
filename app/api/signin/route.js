// app/api/signin/route.js
import { createConnection } from "mysql2/promise";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    // Connect to the MySQL database
    const connection = await createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "amader_kachua",
    });

    // Fetch the user by email
    const [rows] = await connection.execute(
      `SELECT * FROM users WHERE email = ?`,
      [email]
    );

    await connection.end();

    // Check if the user exists
    if (rows.length > 0) {
      const user = rows[0];

      // Compare the plaintext password with the hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        // If the passwords match, return the user object
        delete user.password;
        return new Response(
          JSON.stringify({ message: "Login successful!", user: user }),
          { status: 200 }
        );
      } else {
        return new Response(JSON.stringify({ message: "Invalid password." }), {
          status: 401,
        });
      }
    } else {
      return new Response(JSON.stringify({ message: "User not found." }), {
        status: 404,
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error signing in user." }), {
      status: 500,
    });
  }
}
