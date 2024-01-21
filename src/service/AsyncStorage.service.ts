export const storageService = {
  query,
  get,
  post,
  put,
  remove,
}

type LocalStorageEntityType = {
  _id: string;
  [key: string]: any;
}
type LocalStorageNewEntityType = {
  [key: string]: any;
}

function query(entityType: string, delay = 500): Promise<LocalStorageEntityType[]> {
  const entitiesString: string | null = localStorage.getItem(entityType);
  const entities: LocalStorageEntityType[] = entitiesString ? JSON.parse(entitiesString) : [];
  return new Promise((resolve) => setTimeout(() => resolve(entities), delay))
}

async function get(entityType: string, entityId: string): Promise<LocalStorageEntityType> {
  const entities = await query(entityType)
  const entity = entities.find((entity) => entity._id === entityId)
  if (!entity)
    throw new Error(
      `Get failed, cannot find entity with id: ${entityId} in: ${entityType}`
    );
  return entity;
}

async function post(entityType: string, newEntity: LocalStorageNewEntityType): Promise<LocalStorageEntityType> {
  newEntity = JSON.parse(JSON.stringify(newEntity))
  const entityToAdd: LocalStorageEntityType = { ...newEntity, _id: _makeId() }
  const entities = await query(entityType)
  entities.push(entityToAdd)
  _save(entityType, entities)
  return entityToAdd
}

async function put(entityType: string, updatedEntity: LocalStorageEntityType): Promise<LocalStorageEntityType> {
  updatedEntity = JSON.parse(JSON.stringify(updatedEntity))
  const entities = await query(entityType);
  const idx = entities.findIndex((entity) => entity._id === updatedEntity._id);
  if (idx < 0)
    throw new Error(
      `Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`
    );
  entities.splice(idx, 1, updatedEntity);
  _save(entityType, entities);
  return updatedEntity;
}

async function remove(entityType: string, entityId: string): Promise<string> {
  const entities = await query(entityType);
  const idx = entities.findIndex((entity) => entity._id === entityId);
  if (idx < 0)
    throw new Error(
      `Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`
    );
  entities.splice(idx, 1);
  _save(entityType, entities);
  return entityId;
}

function _save(entityType: string, entities: LocalStorageEntityType[]): void {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length: number = 5): string {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
