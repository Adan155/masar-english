# MASAR — English Journey (starter app)

This is a first, installable web-app prototype inspired by gamified language-learning mechanics. It uses the supplied MASAR logo and includes five sample A2 lessons, Arabic translations, multiple-choice practice, immediate feedback, XP, lesson unlocking, a progress bar, and text-to-speech where the browser supports it.

## Important limitations of this first version
- Progress is saved only in the current browser/device using localStorage.
- There are no shared student accounts, teacher dashboard, cloud database, admin controls, or synchronized progress yet.
- It is a starter prototype, not a complete Duolingo-scale product.
- The app uses an original MASAR layout; it does not copy Duolingo's branding or proprietary assets.

## Test it on your device
1. Unzip the project.
2. Upload the folder contents to a static host that supports HTTPS (for example, GitHub Pages).
3. Open the published HTTPS address on your Android phone.
4. In Chrome, open the menu (⋮) and choose **Add to Home screen** or **Install app** if offered.
5. Students can open the same address on their own devices. In this prototype, each student's progress is local to their own device.

## Publish using GitHub Pages (free-tier availability/terms may change)
1. Sign in or create an account at https://github.com/
2. Create a new repository, e.g. `masar-english`.
3. Upload all files and folders from this project (keep the `assets` folder).
4. Open repository **Settings → Pages**.
5. Under build/deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish and open the provided website address.
7. Share that address with students.

## Before using this for a real class
To let the teacher add/edit lessons and see every student's results, connect an authentication and database service (for example Supabase), create secure teacher/student roles and access policies, and test privacy/security. Never put a private service key in browser code. This is a next development stage and is not included in this prototype.

## Customising lessons
Open `app.js` in a code editor. The `lessons` array near the top contains titles, icons, phrases, Arabic translations, questions, choices, correct-answer indexes, and explanations.
