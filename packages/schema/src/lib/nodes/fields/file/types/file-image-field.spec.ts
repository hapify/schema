import { FileImageField } from './file-image-field';

describe('FileImageField', () => {
  describe('constructor', () => {
    it('should create a field', () => {
      const field = new FileImageField('test');
      expect(field).toBeInstanceOf(FileImageField);
    });
  });
  describe('type', () => {
    it('should have the correct type and subType', () => {
      const field = new FileImageField('test');
      expect(field.type).toBe('file');
      expect(field.subType).toBe('image');
    });
  });

  describe('maxWidth', () => {
    it('should be undefined by default', () => {
      const field = new FileImageField('test');
      expect(field.maxWidth).toBeUndefined();
    });
    it('should set the maxWidth', () => {
      const field = new FileImageField('test');
      expect(field.setMaxWidth(100)).toBe(field); // Test chaining;
      expect(field.maxWidth).toBe(100);
    });
  });

  describe('maxHeight', () => {
    it('should be undefined by default', () => {
      const field = new FileImageField('test');
      expect(field.maxHeight).toBeUndefined();
    });
    it('should set the maxHeight', () => {
      const field = new FileImageField('test');
      expect(field.setMaxHeight(100)).toBe(field); // Test chaining;
      expect(field.maxHeight).toBe(100);
    });
  });

  describe('minWidth', () => {
    it('should be undefined by default', () => {
      const field = new FileImageField('test');
      expect(field.minWidth).toBeUndefined();
    });
    it('should set the minWidth', () => {
      const field = new FileImageField('test');
      expect(field.setMinWidth(100)).toBe(field); // Test chaining;
      expect(field.minWidth).toBe(100);
    });
  });

  describe('minHeight', () => {
    it('should be undefined by default', () => {
      const field = new FileImageField('test');
      expect(field.minHeight).toBeUndefined();
    });
    it('should set the minHeight', () => {
      const field = new FileImageField('test');
      expect(field.setMinHeight(100)).toBe(field); // Test chaining;
      expect(field.minHeight).toBe(100);
    });
  });
});
