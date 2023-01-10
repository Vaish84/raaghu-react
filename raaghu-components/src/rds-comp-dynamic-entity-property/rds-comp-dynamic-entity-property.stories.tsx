import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompDynamicEntityProperty from "./rds-comp-dynamic-entity-property";

export default {
  title: "Components/ Dynamic Entity Properties",
  component: RdsCompDynamicEntityProperty,
} as ComponentMeta<typeof RdsCompDynamicEntityProperty>;

const Template: ComponentStory<typeof RdsCompDynamicEntityProperty> = (args) => 
  <RdsCompDynamicEntityProperty {...args} />;

export const Default = Template.bind({});

Default.args ={
 parameterList: [
    {
      label: "Demo 1",
    },
    {
      label: "Demo 2",
    },
    {
      label: "Demo 3",
    },
    {
      label: "Demo 4",
    }
  ], 
  entityNames:[ {label:"ANZAngular105Demo.Authorization.Users.User"}, {label:"ANZAngular105Demo.Authorization"},]
}



