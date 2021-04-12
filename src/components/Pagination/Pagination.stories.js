import React from "react";

import PaginationComponent from "./index";

export default {
  title: "Modules/Pagination",
  component: PaginationComponent,
};

const Template = (args) => <PaginationComponent {...args} />;

export const Pagination = Template.bind({});
Pagination.args = {
  totalRecords: 500,
  pageNeighbors: 1,
  currentPage: 1,
  onPageChanged: () => {},
};
