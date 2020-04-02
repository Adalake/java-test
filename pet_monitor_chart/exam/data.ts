import { ReconCT, DType, CTReconFilterKernelName } from 'src/app/model/recon';
import { CTFilterKernel } from 'src/app/model/machine';
import { ProcessState } from 'src/app/model/share';

export const TEST_TOMO_RECON: ReconCT = {
  name: 'recon name',
  image_meta: {
    size: {
      x: 255,
      y: 255,
      z: 202.5,
    },
    shape: {
      x: 512,
      y: 512,
      z: 100,
    },
    center: {
      x: 0,
      y: 0,
      z: 600,
    },
    pixel_size: {
      x: 1.0,
      y: 1.0,
      z: 2.5,
    },
    dtype: DType.Float32,
  },
  filter_kernel_name: CTReconFilterKernelName.Lungbone,
  full_recon: true,
  phase: 2,
  is_bone_process: true,
  is_metal_process: false,
  is_denoise: true,
  denoise_parameter: 0.3,
  image_window: {
    width: 500,
    level: 50,
  },
  description: 'Recon Scout',
  state: ProcessState.Unstarted,
};

export const TEST_SPRIAL_RECON: ReconCT = {
  name: 'A test recon for Spiral',
  image_meta: {
    size: {
      x: 51.2,
      y: 51.2,
      z: 400,
    },
    shape: {
      x: 512,
      y: 512,
      z: 40,
    },
    center: {
      x: 0,
      y: 0,
      z: 300,
    },
    pixel_size: {
      x: 0.1,
      y: 0.1,
      z: 10,
    },
    dtype: DType.Float32,
  },

  state: ProcessState.Unstarted,
  filter_kernel_name: CTReconFilterKernelName.Lungbone,
  full_recon: false,
  phase: 2,
  is_bone_process: false,
  is_metal_process: false,
  is_denoise: false,
  denoise_parameter: 0.3,
  image_window: {
    width: 500,
    level: 50,
  },
  description: 'Recon Helical',
};

export const TEST_AXIAL_RECON: ReconCT = {
  description: 'Recon Axial',
  name: 'A test recon for axial',
  image_meta: {
    size: {
      x: 51.2,
      y: 51.2,
      z: 400,
    },
    shape: {
      x: 512,
      y: 512,
      z: 80,
    },
    center: {
      x: 0,
      y: 0,
      z: 300,
    },
    pixel_size: {
      x: 0.1,
      y: 0.1,
      z: 5,
    },
    dtype: DType.Float32,
  },

  state: ProcessState.Unstarted,
  filter_kernel_name: CTReconFilterKernelName.Standard,
  full_recon: false,
  phase: 2,
  is_bone_process: false,
  is_metal_process: false,
  is_denoise: false,
  denoise_parameter: 0.3,
  image_window: {
    width: 500,
    level: 50,
  },
};

export const TEST_DESIGNED_SCOUT_RECON: ReconCT = {
  name: 'scout',
  filter_kernel_name: CTReconFilterKernelName.Standard,
  image_meta: {
    dtype: DType.Float32,
    size: { x: 600, y: 600, z: 1500 },
    shape: { x: 300, y: 300, z: 175 },
    center: { x: 0, y: 0, z: 1250 },
    pixel_size: { x: 2.0, y: 2.0, z: 2.0 },
  },
  full_recon: true,
  phase: 0,
  is_bone_process: true,
  is_metal_process: true,
  is_denoise: true,
  denoise_parameter: 0.5,
  image_window: { width: 2500, level: 500 },
  description: '',
  state: ProcessState.Processing,
};

export const TEST_DESIGNED_HEAD_HELICAL_RECON: ReconCT = {
  name: 'head-helical',
  filter_kernel_name: CTReconFilterKernelName.Standard,
  image_meta: {
    dtype: DType.Float32,
    size: { x: 300, y: 300, z: 270 },
    shape: { x: 150, y: 150, z: 180 },
    center: { x: 0, y: 0, z: 1650 },
    pixel_size: { x: 2.0, y: 2.0, z: 1.5 },
  },
  full_recon: true,
  phase: 0,
  is_bone_process: true,
  is_metal_process: true,
  is_denoise: true,
  denoise_parameter: 0.5,
  image_window: { width: 250, level: 80 },
  description: '',
  state: ProcessState.Processing,
};
