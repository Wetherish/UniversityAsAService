# Product decisions

Earlier decisions on lecture access and note sharing are recorded in [PRODUCT.md](PRODUCT.md).

## First release

| Decision | Alternative considered | Reason |
| --- | --- | --- |
| Launch with recorded lectures. Add optional live streaming later. | Launch with recordings and live streaming together. | Test the recorded learning experience before building live delivery. |
| Have the project team add recordings. | Let professors upload their own recordings. | A small catalog is enough to test the student experience. |
| Invite students to the first release. | Allow open signup. | Gather focused feedback from a small group. |

## Recorded lectures

| Decision | Alternative considered | Reason |
| --- | --- | --- |
| Record every lecture. Let students ask the AI questions during recorded playback. The professor teaches the lecture and the AI serves as a supplementary resource. | Allow questions during live streams only. | Students who miss the stream can still ask questions in context. |
| Use course materials first and flag answers that add outside context. | Use lecture and course materials exclusively. | Students can get additional examples and background while knowing when the answer goes beyond the course. |
| Accept voice and text questions. | Accept text only. | Students can speak naturally or type when they need to stay quiet. |
| Show answers as text with optional ElevenLabs audio. | Show answers as text only. | Students can read or listen. |
| Pause playback when the question panel opens and let students resume manually. | Keep playing until the student pauses. | Students can focus on the discussion and return to the same point. |
| Save AI questions and answers with the lecture. | Keep them for the current session. | Students can revisit explanations when studying. |
| Resume from the last playback position and let students mark a lecture complete. | Save the playback position alone. | Students can track progress across a course and decide when a lecture is finished. |

## Professor messaging

| Decision | Alternative considered | Reason |
| --- | --- | --- |
| Let students message the professor directly. Include the lecture title and timestamp by default, with an option to remove the timestamp. | Send the message alone. | The professor can find the relevant moment without asking the student to restate it. |
| Keep professor replies in the platform alongside the lecture. | Reply by email. | Students can revisit the conversation in context. |
| Notify students about replies in the platform. | Send both an in-platform notification and an email. | Students can open the reply directly from the platform. |
| Use AI to summarize and group inbox questions and draft replies for the professor to review and send. | Summarize and group questions only. | Drafts save time while the professor controls what gets sent. |

## Live streaming after the first release

| Decision | Alternative considered | Reason |
| --- | --- | --- |
| Offer private AI answers and text questions to the professor during optional live streams. The professor decides when to address questions. | Offer text questions to the professor only. | Students can get immediate help while the professor controls the pace. |
| Send unanswered live questions automatically to the professor's AI-assisted inbox. | Carry over questions only when students request a follow-up, or keep them in the live session. | Students only have to ask once, and AI can group repeated questions. |
