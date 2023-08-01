import connection from "./database.js";

export const getcourses = async () => {
  try {
    const results = await connection.query('SELECT * FROM courses ORDER BY id ASC');
    
    return results.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createcourses = async (body) => {

  const {
    author_name,
    author_experience,
    email,
    linkedin,
    title,
    description,
    category,
    difficulty,
    course_duration,
    module_title,
    module_link,
    module_details
  } = body;
  

  try {
    const results = await connection.query(
      `INSERT INTO 
      courses(author_name, author_experience, email, linkedin, title, description, category, difficulty, course_duration, module_title, module_link, module_details)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);`,
      [author_name, author_experience, email, linkedin, title, description, category, difficulty, course_duration, module_title, module_link, module_details]
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
