/* tslint:disable */
/** Execute `npm run generate` to regenerate **/
/* Generated from CalculatorState.json */

export interface CalculatorState {
  value: string;
  memory: number;
}

/* Generated from CameraState.json */

export interface CameraState {
  Position: VectorState;
  Rotation: VectorState;
  Distance: number;
  Zoomed: boolean;
}

/* Generated from ClockSaveState.json */

export interface ClockSaveState {
  ClockState?: unknown;
  SecondsPassed?: number;
  Paused?: boolean;
}

/* Generated from ColourState.json */

export interface ColourState {
  r: number;
  g: number;
  b: number;
}

/* Generated from CounterState.json */

export interface CounterState {
  value: number;
}

/* Generated from CustomAssetbundleState.json */

export interface CustomAssetbundleState {
  AssetbundleURL: string;
  AssetbundleSecondaryURL: string;
  /**
   * 0 = Plastic, 1 = Wood, 2 = Metal, 3 = Cardboard
   */
  MaterialIndex: 0 | 1 | 2 | 3;
  /**
   * 0 = Generic, 1 = Figurine, 2 = Dice, 3 = Coin, 4 = Board, 5 = Chip, 6 = Bag, 7 = Infinite
   */
  TypeIndex: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  LoopingEffectIndex: number;
}

/* Generated from CustomAssetState.json */

export interface CustomAssetState {
  Name: string;
  URL: string;
}

/* Generated from CustomDecalState.json */

export interface CustomDecalState {
  Name: string;
  ImageURL: string;
  /**
   * Size in inches.
   */
  Size?: number;
}

/* Generated from CustomDeckState.json */

export interface CustomDeckState {
  FaceURL: string;
  BackURL: string;
  NumWidth?: number | null;
  NumHeight?: number | null;
  /**
   * Back of cards becames the hidden card when in a hand.
   */
  BackIsHidden: boolean;
  /**
   * Each back is a unique card just like the front.
   */
  UniqueBack: boolean;
}

/* Generated from CustomDiceState.json */

export interface CustomDiceState {
  Type: unknown;
}

/* Generated from CustomImageState.json */

export interface CustomImageState {
  ImageURL: string;
  ImageSecondaryURL: string;
  /**
   * Holds the scaled size of the object based on the image dimensions.
   */
  WidthScale: string;
  CustomDice: CustomDiceState;
  CustomToken: CustomTokenState;
  CustomJigsawPuzzle: CustomJigsawPuzzleState;
  CustomTitle?: CustomTileState;
}

/* Generated from CustomJigsawPuzzleState.json */

export interface CustomJigsawPuzzleState {
  NumPuzzlePieces?: number;
  ImageOnBoard: boolean;
}

/* Generated from CustomMeshState.json */

export interface CustomMeshState {
  MeshURL: string;
  DiffuseURL: string;
  NormalURL: string;
  CollideURL?: string;
  Convex: boolean;
  /**
   * 0 = Plastic, 1 = Wood, 2 = Metal, 3 = Cardboard
   */
  MaterialIndex: 0 | 1 | 2 | 3;
  /**
   * 0 = Generic, 1 = Figurine, 2 = Dice, 3 = Coin, 4 = Board, 5 = Chip, 6 = Bag, 7 = Infinite
   */
  TypeIndex: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  CustomShader: CustomShaderState;
  CastShadows: boolean;
}

/* Generated from CustomShaderState.json */

export interface CustomShaderState {
  SpecularColor: ColourState;
  SpecularIntensity: number;
  SpecularSharpness: number;
  FresnelStrength: number;
}

/* Generated from CustomTileState.json */

export interface CustomTileState {
  /**
   * 0 = Plastic, 1 = Wood, 2 = Metal, 3 = Cardboard
   */
  Type: 0 | 1 | 2 | 3;
  Thickness: number;
  Stackable: boolean;
  Stretch: boolean;
}

/* Generated from CustomTokenState.json */

export interface CustomTokenState {
  Thickness: number;
  MergeDistancePixels: number;
  Stackable: boolean;
}

/* Generated from DecalState.json */

export interface DecalState {
  Transform: TransformState;
  CustomDecal: CustomDecalState;
}

/* Generated from FogOfWarRevealerSaveState.json */

export interface FogOfWarRevealerSaveState {
  active: boolean;
  range: number;
  color: string;
}

/* Generated from FogOfWarSaveState.json */

export interface FogOfWarSaveState {
  HideGmPointer: boolean;
  HideObjects: boolean;
  Height: number;
  /**
   * Dictionary<string, HashSet<int>
   */
  RevealedLocations: {
    [k: string]: unknown;
  };
}

/* Generated from GridState.json */

export interface GridState {
  /**
   * 0 = Box, 1 = Horizontal, 2 = HexVertical
   */
  Type: 0 | 1 | 2;
  Lines: boolean;
  Color: ColourState;
  /**
   * Alpha opacity.
   */
  Opacity: number;
  ThickLines: boolean;
  /**
   * Line snapping.
   */
  Snapping: boolean;
  /**
   * Center snapping.
   */
  Offset: boolean;
  /**
   * Boths snapping.
   */
  BothSnapping: boolean;
  xSize: number;
  ySize: number;
  PosOffset?: VectorState;
}

/* Generated from HandsState.json */

export interface HandsState {
  Enable: boolean;
  DisableUnused: boolean;
  /**
   * 0 = Default = only owner can see, 1 = Reverse = opposite of default, 2 = Disable = hiding is disabled.
   */
  Hiding: 0 | 1 | 2;
  HandTransforms: HandTransformState[];
}

/* Generated from HandTransformState.json */

export interface HandTransformState {
  Color: string;
  Transform: TransformState;
}

/* Generated from JointFixedState.json */

/**
 * http://docs.unity3d.com/ScriptReference/FixedJoint.html
 */
export type JointFixedState = JointState;

/* Generated from JointHingeState.json */

/**
 * http://docs.unity3d.com/ScriptReference/HingeJoint.html
 */
export interface JointHingeState {
  UseLimits: boolean;
  /**
   * Limit of angular rotation on the hinge joint. http://docs.unity3d.com/ScriptReference/JointLimits.html.
   */
  Limits: {
    [k: string]: unknown;
  };
  UseMotor: boolean;
  /**
   * Limit of angular rotation on the hinge joint. The motor will apply a force up to a maximum force to achieve the target velocity in degrees per second. http://docs.unity3d.com/ScriptReference/JointMotor.html.
   */
  Motor: {
    [k: string]: unknown;
  };
  UseSpring: boolean;
  /**
   * The spring attempts to reach a target angle by adding spring and damping forces. http://docs.unity3d.com/ScriptReference/JointSpring.html.
   */
  Spring: {
    [k: string]: unknown;
  };
}

/* Generated from JointSpringState.json */

/**
 * http://docs.unity3d.com/ScriptReference/SpringJoint.html
 */
export interface JointSpringState {
  /**
   * The damper force used to dampen the spring force
   */
  Damper: number;
  /**
   * The maximum distance between the bodies relative to their initial distance.
   */
  MaxDistance: number;
  /**
   * The minimum distance between the bodies relative to their initial distance.
   */
  MinDistance: number;
  /**
   * The spring force used to keep the two objects together.
   */
  Spring: number;
}

/* Generated from JointState.json */

/**
 * http://docs.unity3d.com/ScriptReference/Joint.html
 */
export interface JointState {
  /**
   * A reference to another rigidbody this joint connects to.
   */
  ConnectedBodyGUID: string;
  /**
   * Enable collision between bodies connected with the joint.
   */
  EnableCollision: boolean;
  Axis: VectorState;
  Anchor: VectorState;
  /**
   * The force that needs to be applied for this joint to break.
   */
  BreakForce: number;
  /**
   * The torque that needs to be applied for this joint to break.
   */
  BreakTorgue: number;
}

/* Generated from LightingState.json */

export interface LightingState {
  LightIntensity: number;
  LightColor: ColourState;
  AmbientIntensity: number;
  /**
   * 0 = Background = ambient light comes from the background, 1 = Gradient = ambient light comes from the three ambient colors.
   */
  AmbientType: 0 | 1;
  AmbientSkyColor: ColourState;
  AmbientEquatorColor: ColourState;
  AmbientGroundColor: ColourState;
  ReflectionIntensity: number;
  LutIndex: number;
  LutContribution: number;
  /**
   * LUT 256x16
   */
  LutURL?: string;
}

/* Generated from Mp3PlayerState.json */

export interface Mp3PlayerState {
  songTitle: string;
  genre: string;
  volume: number;
  isPlaying: boolean;
  loopOne: boolean;
  menuTitle: string;
  menu: unknown;
}

/* Generated from ObjectState.json */

export interface ObjectState {
  /**
   * Internal object name.
   */
  Name: string;
  Transform: TransformState;
  /**
   * Name supplied in game.
   */
  Nickname: string;
  Description: string;
  GMNotes: string;
  IgnoreFoW: boolean;
  ColorDiffuse: ColourState;
  /**
   * Freeze object in place.
   */
  Locked: boolean;
  /**
   * Object will snap to grid.
   */
  Grid: boolean;
  /**
   * Object will snap to snap points
   */
  Snap: boolean;
  /**
   * Object will raise above others and avoid collision.
   */
  Autoraise: boolean;
  /**
   * When picked up objects above this one will be attached to it.
   */
  Sticky: boolean;
  /**
   * When hovering object will display tooltips.
   */
  Tooltip: boolean;
  /**
   * Grid will project on this object.
   */
  GridProjection?: boolean;
  /**
   * When face down object is question mark hidden.
   */
  HideWhenFaceDown?: boolean | null;
  /**
   * Object will enter player hands.
   */
  Hands?: boolean | null;
  /**
   * Some objects have 2 materials, with two sound sets.
   */
  AltSound?: boolean | null;
  /**
   * Some objects can have multiple materials.
   */
  MaterialIndex?: number | null;
  /**
   * Some objects can have multiple meshes.
   */
  MeshIndex?: number | null;
  /**
   * Sound Layer.
   */
  Layer?: number | null;
  Number?: number | null;
  CardID?: number | null;
  SidewaysCard?: boolean | null;
  RPGmode?: boolean | null;
  RPGdead?: boolean | null;
  FogColor?: string | null;
  FogHidePointers?: boolean | null;
  FogReverseHiding?: boolean | null;
  FogSeethrough?: boolean | null;
  DeckIDs?: number[] | null;
  /**
   * Key matches the hundreth place of the id (ex. id = 354, index = 3).
   */
  CustomDeck?: {
    [k: string]: CustomDeckState;
  };
  CustomMesh?: CustomMeshState;
  CustomImage?: CustomImageState;
  CustomAssetbundle?: CustomAssetbundleState;
  FogOfWar?: FogOfWarSaveState;
  FogOfWarRevealer?: FogOfWarRevealerSaveState;
  Clock?: ClockSaveState;
  Counter?: CounterState;
  Tablet?: TabletState;
  Mp3Player?: Mp3PlayerState;
  Calculator?: CalculatorState;
  Text?: TextState;
  /**
   * Custom Xml UI.
   */
  XmlUI?: string;
  CustomUIAssets?: CustomAssetState[];
  LuaScript?: string;
  /**
   * Serialized running Lua code.
   */
  LuaScriptState?: string;
  /**
   * Objects inside this one.
   */
  ContainedObjects?: ObjectState[];
  PhysicsMaterial?: PhysicsMaterialState;
  Rigidbody?: RigidbodyState;
  JointFixed?: JointFixedState;
  JointHinge?: JointHingeState;
  JointSpring?: JointSpringState;
  GUID?: string;
  /**
   * Snap points that are stuck to this object, happens when placing a snap point on a locked object.
   */
  AttachedSnapPoints?: SnapPointState[];
  /**
   * Vector lines that are stuck to this object, happens when drawing a vector line on a locked object.
   */
  AttachedVectorLines?: VectorLineState[];
  /**
   * Decals that are attached to this objects.
   */
  AttachedDecals?: DecalState[];
  /**
   * Objects can have multiple states which can be swapped between.
   */
  States?: {
    [k: string]: ObjectState;
  };
  /**
   * Rotation values are tooltip values tied to rotations.
   */
  RotationValues?: unknown[];
}

/* Generated from OrientationState.json */

export interface OrientationState {
  position: VectorState;
  rotation: unknown;
}

/* Generated from PhysicsMaterialState.json */

export interface PhysicsMaterialState {
  /**
   * The friction used when an object is laying still on a surface. Usually a value from 0 to 1. A value of zero feels like ice, a value of 1 will make it very hard to get the object moving.
   */
  StaticFriction: number;
  /**
   * The friction used when already moving. Usually a value from 0 to 1. A value of zero feels like ice, a value of 1 will make it come to rest very quickly unless a lot of force or gravity pushes the object.
   */
  DynamicFriction: number;
  /**
   * How bouncy is the surface? A value of 0 will not bounce. A value of 1 will bounce without any loss of energy.
   */
  Bounciness: number;
  /**
   * How the friction of two colliding objects is combined. 0 = Average, 1 = Minimum, 2 = Maximum, 3 = Multiply.
   */
  FrictionCombine: 0 | 1 | 2 | 3;
  /**
   * How the friction of two colliding objects is combined. 0 = Average, 1 = Minimum, 2 = Maximum, 3 = Multiply.
   */
  BounceCombine: 0 | 1 | 2 | 3;
}

/* Generated from RigidbodyState.json */

export interface RigidbodyState {
  /**
   * The mass of the object (arbitrary units). You should not make masses more or less than 100 times that of other Rigidbodies.
   */
  Mass: number;
  /**
   * How much air resistance affects the object when moving from forces. 0 means no air resistance, and infinity makes the object stop moving immediately.
   */
  Drag: number;
  /**
   * How much air resistance affects the object when rotating from torque. 0 means no air resistance. Note that you cannot make the object stop rotating just by setting its Angular Drag to infinity.
   */
  AngularDrag: number;
  /**
   * If enabled, the object is affected by gravity.
   */
  UseGravity: boolean;
}

/* Generated from RotationValueState.json */

export interface RotationValueState {
  Value: unknown;
  Rotation: VectorState;
}

/* Generated from SaveState.json */

export interface SaveState {
  SaveName: string;
  GameMode: string;
  Gravity: number;
  PlayArea: number;
  Date: string;
  Table: string;
  TableURL?: string | null;
  Sky: string;
  SkyURL?: string | null;
  Note?: string;
  Rules: string;
  XmlUI: string;
  CustomUIAssets?: CustomAssetState[];
  LuaScript: string;
  LuaScriptState: string;
  Grid: GridState;
  Lighting: LightingState;
  Hands: HandsState;
  Turns: TurnsState;
  /**
   * Vector lines on canvas 0 (table + beyond).
   */
  VectorLines?: VectorLineState[];
  /**
   * Objects on the table.
   */
  ObjectStates: ObjectState[];
  /**
   * Snap points not attached to objects.
   */
  SnapPoints?: SnapPointState[];
  /**
   * Decals that can be placed in the world.
   */
  DecalPallet: CustomDecalState[];
  /**
   * Decals not attached to objects.
   */
  Decals?: DecalState[];
  /**
   * Notepad tabs
   */
  TabStates: {
    [k: string]: TabState;
  };
  /**
   * Saved camera positions.
   */
  CameraStates?: CameraState[];
  VersionNumber: string;
}

/* Generated from SnapPointState.json */

export interface SnapPointState {
  Position: VectorState;
  Rotation: VectorState;
}

/* Generated from TabletState.json */

export interface TabletState {
  PageURL: string;
}

/* Generated from TabState.json */

export interface TabState {
  title: string;
  body: string;
  color: string;
  visibleColor: ColourState;
  id: number;
}

/* Generated from TextState.json */

export interface TextState {
  Text: string;
  colorstate: ColourState;
  fontSize: number;
}

/* Generated from TransformState.json */

export interface TransformState {
  posX: number;
  posY: number;
  posZ: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  scaleX: number;
  scaleY: number;
  scaleZ: number;
}

/* Generated from TurnsState.json */

export interface TurnsState {
  Enable: boolean;
  /**
   * 0 = Auto = turn order is based on positioning of hands on around table, 1 = Custom = turn order is based on an user color list.
   */
  Type: 0 | 1;
  TurnOrder: string[];
  Reverse: boolean;
  SkipEmpty: boolean;
  DisableInteractions?: boolean;
  PassTurns: boolean;
  TurnColor: string;
}

/* Generated from VectorLineState.json */

export interface VectorLineState {
  points3: VectorState[];
  color: ColourState;
  thickness: number;
  rotation: VectorState;
  loop?: boolean | null;
  square?: boolean | null;
}

/* Generated from VectorState.json */

export interface VectorState {
  x: number;
  y: number;
  z: number;
}
