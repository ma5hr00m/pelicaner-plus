import yaml from "js-yaml";


export const loadConf = async () => {
  try {
    const response = await fetch("pelicaner.yaml");
    const yamlText = await response.text();
    const yamlObject = yaml.load(yamlText);
    return yamlObject;
  } catch (error) {
    console.error("Error loading YAML file:", error);
  }
};
