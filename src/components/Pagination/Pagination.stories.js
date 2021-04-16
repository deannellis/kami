import React from "react";

import PaginationComponent from "./index";

export default {
  title: "Modules/Pagination",
  component: PaginationComponent,
  argTypes: { onPageChanged: { action: "page clicked" } },
};

const Template = (args) => <PaginationComponent {...args} />;

export const Pagination = Template.bind({});
Pagination.args = {
  totalRecords: 500,
  pageNeighbors: 1,
  currentPage: 1,
};
