/* import React from "react";

export default ({ url, active }) => {
  return (
    <div className="project-image">
      <img className={active && "is-active"} src={url} alt="sample-data" />
    </div>
  );
};
 */

import React from "react";

export default ({ url, active }) => {
  return (
    <div className="project-image">
      <img className={active && "is-active"} src={url} alt="sample data" />
    </div>
  );
};
