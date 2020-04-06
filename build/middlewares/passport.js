// import User from "../author/model/user";

// export function authorize(role) {
//   return async function(req, res, next) {
//     const auth = await User.findByToken(req.body.param.token);
//     if (auth) {
//       if (auth.role === role){
//         next(); return;
//       }
//       res.status(401);
//       res.json({
//         status: "err",
//         result: {
//           info: "Unauthorized access"
//         }
//       });
//     } else {
//       res.status(401);
//       res.json({
//         status: "err",
//         result: {
//           info: "Unauthorized access"
//         }
//       });
//     }
//   };
// }
"use strict";
//# sourceMappingURL=passport.js.map