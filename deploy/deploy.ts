import { Address, Deployer } from "../web3webdeploy/types";
import { DeployOpenASSettings, deployOpenAS } from "./internal/OPENas";

export interface DeploymentSettings {
  openASSettings: DeployOpenASSettings;
  forceRedeploy?: boolean;
}

export interface Deployment {
  openAS: Address;
}

export async function deploy(
  deployer: Deployer,
  settings?: DeploymentSettings
): Promise<Deployment> {
  if (settings?.forceRedeploy !== undefined && !settings.forceRedeploy) {
    const existingDeployment = await deployer.loadDeployment({
      deploymentName: "latest.json",
    });
    if (existingDeployment !== undefined) {
      return existingDeployment;
    }
  }

  const openAS = await deployOpenAS(deployer, settings?.openASSettings ?? {});

  const deployment = {
    openAS: openAS,
  };
  await deployer.saveDeployment({
    deploymentName: "latest.json",
    deployment: deployment,
  });
  return deployment;
}
